import { reviews } from "@/data/products";
import { CustomerFeedbackCarousel } from "../components/FeedbackCarousel";
import { BreadCrumbs } from "../components/BreadCrumbs";
import { PaginationDemo } from "../components/Pagination";

type Props = {}

const page = (props: Props) => {
  return (
    <div className="w-full">
      <BreadCrumbs />
 <CustomerFeedbackCarousel reviews={reviews} />
<PaginationDemo/>
    </div>
  )
};

export default page;