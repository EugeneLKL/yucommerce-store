import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("fca5951e-20a6-461a-bfba-cedfac2d1f3a");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}/>
      </div>
    </Container>
  );
};

export default HomePage;
