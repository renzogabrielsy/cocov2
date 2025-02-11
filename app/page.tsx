import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="h-dvh bg-base-100 max-w-dvw flex-auto">
      <button className="btn btn-primary">One</button>
      <button className="btn btn-secondary">Two</button>
      <button className="btn btn-accent btn-outline">Three</button>
    </div>
  );
}
