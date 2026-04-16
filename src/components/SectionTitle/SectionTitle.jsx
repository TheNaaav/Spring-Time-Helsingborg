import "./SectionTitle.css";

export default function SectionTitle({ title }) {
  return (
    <div className="section-title">
      <span></span>
      <h2>{title}</h2>
      <span></span>
    </div>
  );
}