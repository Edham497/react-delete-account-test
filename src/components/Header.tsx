type Header = React.FC<{
  title: string;
}>;

const Header: Header = ({ title }) => {
  const styles = {
    header: "flex items-center px-4 text-neutral-800 text-xl h-14 bg-zinc-100"
  };

  return (
    <div className={styles.header}>
      <h1>{title ?? "Elimination Request"}</h1>
    </div>
  );
};

export default Header;
