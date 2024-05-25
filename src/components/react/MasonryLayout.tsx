import Masonry from "react-layout-masonry";

const MasonryLayout = ({ items }: { items: string[] }) => {
  return (
    <div>
      <Masonry columns={2} gap={5} className="animate-slideInLeft">
        {items.map((item) => {
          return <img src={item} />;
        })}
      </Masonry>
    </div>
  );
};

export default MasonryLayout;
