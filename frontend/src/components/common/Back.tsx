import { useRouter } from "next/router";
import styles from "@/styles/Countries.module.css"

function Back() {
  const router = useRouter();
  return <button onClick={() => router.back()} className={styles.backButton}>Back</button>;
}

export default Back
