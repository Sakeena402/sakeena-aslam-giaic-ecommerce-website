import { reviews } from "@/data/products";
import { CustomerFeedbackCarousel } from "../components/FeedbackCarousel";

type Props = {}

const page = (props: Props) => {
  return (
    <div className="w-full">
 <CustomerFeedbackCarousel reviews={reviews} />

    </div>
  )
};

export default page;