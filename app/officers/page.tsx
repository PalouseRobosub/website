import styles from "@/styles/officers.module.css";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Officers | Palouse RoboSub"
};

const Page = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Meet the Officers</h1>
      <div className={styles.officersContainer}>
        <div className={styles.officerWrapper}>
          <Image src="https://picsum.photos/250" alt="Image of <officer_name>" height={250} width={250} className={styles.officerImage} />
          <h2>Officer Name</h2>
          <h3>Officer Title</h3>
          <a href="mailto:officer.name@wsu.edu" className={styles.officerEmail}>officer.name@wsu.edu</a>
          <p className={styles.officerDescription}>
            Hello, my name is Officer and I am the EE lead. I am a junior. I like cats.
          </p>
        </div>
        <div className={styles.officerWrapper}>
          <Image src="https://picsum.photos/250" alt="Image of <officer_name>" height={250} width={250} className={styles.officerImage} />
          <h2>Officer Name</h2>
          <h3>Officer Title</h3>
          <a href="mailto:officer.name@wsu.edu" className={styles.officerEmail}>officer.name@wsu.edu</a>
          <p className={styles.officerDescription}>
            Hello, my name is Officer and I am the EE lead. I am a junior. I like cats.
          </p>
        </div>
        <div className={styles.officerWrapper}>
          <Image src="https://picsum.photos/250" alt="Image of <officer_name>" height={250} width={250} className={styles.officerImage} />
          <h2>Officer Name</h2>
          <h3>Officer Title</h3>
          <a href="mailto:officer.name@wsu.edu" className={styles.officerEmail}>officer.name@wsu.edu</a>
          <p className={styles.officerDescription}>
            Hello, my name is Officer and I am the EE lead. I am a junior. I like cats.
          </p>
        </div>
        <div className={styles.officerWrapper}>
          <Image src="https://picsum.photos/250" alt="Image of <officer_name>" height={250} width={250} className={styles.officerImage} />
          <h2>Officer Name</h2>
          <h3>Officer Title</h3>
          <a href="mailto:officer.name@wsu.edu" className={styles.officerEmail}>officer.name@wsu.edu</a>
          <p className={styles.officerDescription}>
            Hello, my name is Officer and I am the EE lead. I am a junior. I like cats.
          </p>
        </div>
        <div className={styles.officerWrapper}>
          <Image src="https://picsum.photos/250" alt="Image of <officer_name>" height={250} width={250} className={styles.officerImage} />
          <h2>Officer Name</h2>
          <h3>Officer Title</h3>
          <a href="mailto:officer.name@wsu.edu" className={styles.officerEmail}>officer.name@wsu.edu</a>
          <p className={styles.officerDescription}>
            Hello, my name is Officer and I am the EE lead. I am a junior. I like cats.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Page;