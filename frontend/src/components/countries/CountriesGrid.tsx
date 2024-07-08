import styles from "@/styles/Countries.module.css";
import CountryCard from "./CountryCard";
import { CountriesQuery } from "@/types/graphql";

function CountriesGrid({ countries }: { countries: CountriesQuery["countries"] }) {
  return (
    <div className={styles.countryGrid}>
      {countries.map((c) => (
        <CountryCard key={c.id} country={c} />
      ))}
    </div>
  );
}

export default CountriesGrid;
