import Title from "../ui/Title";
import styles from "./About.module.scss";

const keyHighlights = [
  "🔒 Secure & Reliable Data",
  "📈 Real-time Sales Analytics",
  "📤 Export to Excel",
  "🤖 AI-Powered Revenue Prediction",
];

const Index = () => {
  return (
    <section className={`${styles.about}`} id="about">
      <div className="container">
        <Title name="ABOUT" />
        <div className={styles["content"]}>
          <div className={styles["content-desc"]}>
            <p className={styles["desc"]}>
              We are a team passionate about helping business owners efficiently
              manage their operations through an easy-to-use ERP system. From
              inventory tracking to daily profit analysis, we provide a complete
              solution that turns data into insight.
            </p>
            <p className={styles["desc"]}>
              Designed especially for small to mid-sized businesses, our
              platform simplifies stock recording, income tracking, and business
              growth monitoring — all in one secure, intuitive dashboard.
            </p>

            <h3>Key Highlights:</h3>
            <ul>
              {keyHighlights.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div className={styles["illustration"]}>
            <img src="images/illustration-report.png" alt="pie-chart" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
