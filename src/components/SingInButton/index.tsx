import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#84d361"></FaGithub> Leonardo Tereza
      <FiX color="#737380" className={styles.closeIcon}></FiX>
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eba417"></FaGithub>Sign in with Github
    </button>
  );
}
