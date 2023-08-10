import { Container } from "@/global/components/Container";
import { SectionTitle } from "@/global/components/SectionTitle";
import Link from "next/link";
import { ROUTES } from "@/app/routes";
import { UpcommingEventsList } from "../../../global/components/upcommingEvents/UpcommingList";

export const UpcommingEventsSection = () => {
      const list=[{},{},{},{}]
  return (
    <section className="py-10 w-screen overflow-hidden ">
      <Container>
      <div className="flex justify-between px-5 items-center">
          <Link className="underline" href={ROUTES.campaigns}>حميع الحملات</Link>
          <SectionTitle text="الحملات القادمة"/>
      </div>
           <UpcommingEventsList upcommingList={list}/>
     </Container>
    </section>
  )
}