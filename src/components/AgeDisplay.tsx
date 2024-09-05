type TProps = {
    title:string,
    dateValue?: number | string
}


export const AgeDisplay = ({title, dateValue}:TProps) =>{
    return(
        <h1 className="text-6xl italic font-serif font-extrabold">
            <span className="text-date-value px-6">
            {!Number.isNaN(dateValue) ? dateValue: "--"}
            </span> 
            {title}
        </h1>
    )
}