import styles from './input.module.css'

export default function Input({ handleChange, submit, value }) {
  return (
    <textarea className={styles.textarea}
      id="text"
      name="text"
      onChange={handleChange}
      onBlur={submit}
      autoFocus
      maxLength="100"
      value={value}
    ></textarea>
  );
}
