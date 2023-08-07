export default function  OutlinedButton ({text}:{text:string}) {
  return (
    <button className="bg-transparent text-secondary border border-secondary font-bold px-2 md:px-4 rounded-md h-fit my-auto py-1 text-md md:text-lg w-fit">
        {text}
    </button>
  )
}
