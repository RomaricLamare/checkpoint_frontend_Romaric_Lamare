import { useEffect } from "react";
import { useRouter } from "next/router";
import Back from "@/components/common/Back";
import styles from "@/styles/Countries.module.css";
import { useCountryLazyQuery } from "@/types/graphql";


function CountryDetails() {

  const router = useRouter();

  const [findCountry, { data, loading } ] = useCountryLazyQuery();
  console.log("data:", data)

  useEffect(() => {
    if (router.isReady) {
      findCountry({ variables: {code: router.query.id as string}})
    }
  }, [router.isReady, router.query, findCountry]);

  return (
    <div className={styles.countryCard}>
      <Back />
      {data ? (
        <>
          <h2>{data.country.name}</h2>
          <h3>Details :</h3>
          <p>{data.country.code}</p>
          <p>{data.country.emoji}</p>
          <p>{data.country.continent?.name}</p>
        </>
      ) : (
        <div>Country does not exist</div>
      )}
    </div>
  );
}

export default CountryDetails;
