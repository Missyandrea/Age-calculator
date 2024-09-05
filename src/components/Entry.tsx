type TProps = {
  label: string;
  placeholder: string;
  sendDateValue: (dateValue: number) => void;
};

export const Entry = ({ label, placeholder, sendDateValue }: TProps) => {
  return (
    <div className="flex-col text-input-group">
      <label className="block font-bold text-xs uppercase" htmlFor="">{label}</label>
      <input
        type="text"
        className="placeholder:italic border-solid border-2 
        border-gray-300 rounded-md h-12 w-28 p-6 font-bold uppercase"
        // value={}
        placeholder={placeholder}
        onChange={(evt) => {
          sendDateValue(parseInt(evt.target.value));
        }}
      />
    </div>
  );
};
