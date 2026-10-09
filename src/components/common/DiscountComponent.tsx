import MainButton from "../ui/Button";

function DiscountComponent() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center md:flex-row md:gap-25  bg-(--bg-dis) my-10 py-8">
      <h1 className="text-5xl font-bold  ">انضم كعضو واحصل على خصم 10%</h1>
      <MainButton
        btnlink="/"
        btntext="سجّل مجاناً"
        coloe="var(--bg-badge)"
        textColor="var( --color-main)"
      />
    </div>
  );
}

export default DiscountComponent;
