import CountriesGrid from "@/components/countries/CountriesGrid";
import { useCountriesQuery } from "@/types/graphql";



const TodoList = () => {

    const { data, loading } = useCountriesQuery({
      fetchPolicy: "no-cache"
    })

    if (loading) {
        return <div>Loading</div>;
    }
    return (
        <>
        <h1>Countries list:  </h1>
        {data?.countries.length ? (
          <CountriesGrid countries={data?.countries} />
        ) : (
          <div>No country</div>
        )}
      </>
    );
};

export default TodoList;