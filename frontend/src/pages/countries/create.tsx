import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import styles from "@/styles/Countries.module.css"
import { useAddCountryMutation, useContinentsQuery } from "@/types/graphql";

const schema = yup.object({
  name: yup.string().required("Attention, le nom du pays est requis"),
  code: yup.string().required("Le code est requise"),
  emoji: yup.string().required("L'emoji' est requise"),

});

type FormType = {
  name: string;
  code: string;
  emoji: string;
  };

function CreateCountry() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [createCountry, {loading: loadingCountry}] = useAddCountryMutation()

  const { data, loading } = useContinentsQuery()

  const onSubmit = (data: FormType) => {
    createCountry({
      variables: {data},
      onCompleted(data) {
        router.push(`../countries/view/${data.addCountry.code}`)
    }})
  };

  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} placeholder="Name" className={styles.form} />
          <p>{errors?.name?.message}</p>

          <input {...register("code")} placeholder="Code" className={styles.form}/>
          <p>{errors?.code?.message}</p>

          <input {...register("emoji")} placeholder="Emoji" className={styles.emoji}/>
          <p>{errors?.emoji?.message}</p>

          <input type="submit" disabled={loadingCountry} />
        </form>
      )}
    </div>
  );
}

export default CreateCountry;
