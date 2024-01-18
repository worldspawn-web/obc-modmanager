import CategoryLists from '../widgets/CategoryLists';
import CopyrightFooter from '../widgets/CopyrightFooter';

const LeftBar = () => {
  return (
    <div className="left-bar">
      <h2>ModManager</h2>
      <CategoryLists />
      <CopyrightFooter />
    </div>
  );
};

export default LeftBar;
