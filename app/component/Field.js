export default function Field({ label, value , classes}) {
  return (
    <div className={`flex align-middle sm:row-start-auto ${classes}`}>
      <span className="font-semibold mr-1 whitespace-nowrap">{label}</span>
      <span className="font-regular whitespace-nowrap">{value}</span>
    </div>
  );
}
