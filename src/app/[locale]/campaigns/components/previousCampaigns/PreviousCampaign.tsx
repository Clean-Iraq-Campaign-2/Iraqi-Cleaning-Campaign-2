import Image, { StaticImageData } from "next/image"
import CampaignImage from "../../assets/yello-cleaning.png";
import Campaigns1 from "../../assets/cleaning-10.jpeg";
import Campaigns2 from "../../assets/cleaning-15.jpeg";
import { useMediaQuery } from '@react-hook/media-query';
import { Container } from "@/global/components/Container";
import { SectionTitle } from "@/global/components/SectionTitle";
import usePreviousCampaigns from "./useFetchPreviousCampaigns";
import IPreviousCampaigns from "./IPreviousCampaigns"
import imagePlaceholder from "../../../../../../public/placeholder-image.png"
import { TimeLine } from "./timeline/TimeLine";
import { LoadingTimeLine } from "./timeline/LoadingTimeLine";

export const PreviousCampaign = () => {
  const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
    const { loading, error, data } = usePreviousCampaigns();
  if (error) {
    return <div>Error: {error}</div>;
  }
  else{
      return (
    <section className="w-screen">
    <Container>
        <div className="text-center py-10 mb-20"><SectionTitle text="حملاتنا السابقة" /></div>
        {loading?(<LoadingTimeLine/>):( <TimeLine campaigns={data}/>)}
    </Container>
    </section>
  )
  }
}
