import "./portofolioList.scss";

const PostofolioList = ({ id, title, active, setSelected }) => {
  return (
    <li
      className={active ? "portofolioList active" : "portofolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default PostofolioList;
