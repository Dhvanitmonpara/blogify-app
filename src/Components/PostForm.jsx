import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select, LoadingBtn } from "../Components/index";
import dbService from "../appwrite/dbConfig";
import bucketService from "../appwrite/bucketConfig";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData.userData);

  const submit = async (data) => {
    setLoading(true);
    if (post) {
      const file = data.image[0]
        ? await bucketService.uploadFile(data.image[0])
        : null;

      if (file) {
        bucketService.deleteFile(post.featuredImage);
      }

      const dbPost = await dbService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        setLoading(false);
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await bucketService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await dbService.createPost({
          ...data,
          userId: userData.$id,
        });

        if (dbPost) {
          setLoading(false);
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex items-center justify-center flex-col md:flex-row flex-wrap"
    >
      <div className="lg:w-2/3 w-11/12 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="lg:w-1/3 w-11/12 lg:mt-0 mt-9 space-y-5 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-1"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={bucketService.filePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        {loading ? (
          <LoadingBtn className="w-full"/>
        ) : (

          <Button type="submit" className="w-full">
          {post ? "Update" : "Submit"}
          </Button>
        )}
      </div>
    </form>
  );
}
