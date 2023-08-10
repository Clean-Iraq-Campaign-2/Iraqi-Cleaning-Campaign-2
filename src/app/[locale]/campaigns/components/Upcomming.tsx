import { Container } from "@/global/components/Container";
import { SectionTitle } from "@/global/components/SectionTitle";
import Link from "next/link";
import { ROUTES } from "@/app/routes";
import { UpcommingEventsList } from "@/global/components/upcommingEvents/UpcommingList";

export const Upcomming = () => {
      const list=[{},{},{},{}]
  return (
    <section className="py-10 w-screen overflow-hidden ">
      <Container>
         <div className="text-end"><SectionTitle text="الحملات القادمة" isPrimaryColor={true}/></div>
      <div className="px-5">
           <UpcommingEventsList upcommingList={list}/>
      </div>
     </Container>
    </section>
  )
}