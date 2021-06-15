import Entry from "./entry";
import styles from "../../styles/tabs/entries.module.css";

const Entries = ({ entries }) => {
  if (entries) {
    return (
      <div>
        {entries.map((e) => (
          <div key={e.id} className={styles.div}>
            <Entry
              id={e.id}
              handleName={e.handleName}
              content={e.content}
              created_at={e.created_at}
            />
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default Entries;
