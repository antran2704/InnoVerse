interface Props {
  title: string;
}

const HeaderContent = (props: Props) => {
  const { title } = props;

  return (
    <div>
      <h2 className="md:text-3xl text-2xl text-center capitalize font-semibold">
        {title}
      </h2>
      <span className="block w-[100px] h-1 bg-primary-200 rounded-lg mx-auto my-1"></span>
    </div>
  );
};

export default HeaderContent;
