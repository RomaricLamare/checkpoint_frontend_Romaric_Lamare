import styles from "@/styles/Countries.module.css";
import { ContinentsQuery, CountryQuery } from "@/types/graphql";
import Link from "next/link";
import { useRouter } from "next/router";

function CountryCard({ country }: { country: CountryQuery["country"]}) {

  const router = useRouter();

  return (
    <div key={country.id} className={styles.countryCard}>
      <h3>{country.name}</h3>
      <Link href={`/countries/view/${country.code}`} className={styles.editButton}>
        {country.emoji}
      </Link>
    </div>
  );
}

export default CountryCard;
