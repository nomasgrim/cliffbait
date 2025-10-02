import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text:4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorum Ipsum
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$75</h3>
          <h2 className="font-medium text-2xl">$50</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4 ">Title</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend finibus neque non auctor. Fusce gravida dolor eu enim fermentum, quis dapibus mi fermentum. Aenean auctor nisl placerat lacus tempus porttitor. Nullam ullamcorper erat eget ante imperdiet, id accumsan justo cursus. Curabitur ultrices libero ipsum, at gravida elit eleifend sit amet. Nam volutpat ligula at sapien volutpat, vel consectetur turpis consectetur. Pellentesque a ornare dui, eu fermentum massa. Fusce diam magna, iaculis non fermentum interdum, iaculis eu ex. Sed ut turpis neque. In gravida, felis quis mollis pellentesque, eros est auctor velit, sed luctus orci nulla at magna. Vestibulum non ultricies orci.</p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4 ">Title</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend finibus neque non auctor. Fusce gravida dolor eu enim fermentum, quis dapibus mi fermentum. Aenean auctor nisl placerat lacus tempus porttitor. Nullam ullamcorper erat eget ante imperdiet, id accumsan justo cursus. Curabitur ultrices libero ipsum, at gravida elit eleifend sit amet. Nam volutpat ligula at sapien volutpat, vel consectetur turpis consectetur. Pellentesque a ornare dui, eu fermentum massa. Fusce diam magna, iaculis non fermentum interdum, iaculis eu ex. Sed ut turpis neque. In gravida, felis quis mollis pellentesque, eros est auctor velit, sed luctus orci nulla at magna. Vestibulum non ultricies orci.</p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4 ">Title</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend finibus neque non auctor. Fusce gravida dolor eu enim fermentum, quis dapibus mi fermentum. Aenean auctor nisl placerat lacus tempus porttitor. Nullam ullamcorper erat eget ante imperdiet, id accumsan justo cursus. Curabitur ultrices libero ipsum, at gravida elit eleifend sit amet. Nam volutpat ligula at sapien volutpat, vel consectetur turpis consectetur. Pellentesque a ornare dui, eu fermentum massa. Fusce diam magna, iaculis non fermentum interdum, iaculis eu ex. Sed ut turpis neque. In gravida, felis quis mollis pellentesque, eros est auctor velit, sed luctus orci nulla at magna. Vestibulum non ultricies orci.</p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4 ">Title</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend finibus neque non auctor. Fusce gravida dolor eu enim fermentum, quis dapibus mi fermentum. Aenean auctor nisl placerat lacus tempus porttitor. Nullam ullamcorper erat eget ante imperdiet, id accumsan justo cursus. Curabitur ultrices libero ipsum, at gravida elit eleifend sit amet. Nam volutpat ligula at sapien volutpat, vel consectetur turpis consectetur. Pellentesque a ornare dui, eu fermentum massa. Fusce diam magna, iaculis non fermentum interdum, iaculis eu ex. Sed ut turpis neque. In gravida, felis quis mollis pellentesque, eros est auctor velit, sed luctus orci nulla at magna. Vestibulum non ultricies orci.</p>
        </div>
      </div>
    </div>
  )
};

export default SinglePage;