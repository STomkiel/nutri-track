import PageTitle from '../components/pageTitle/PageTitle';
import Translation from '../translation/Translation';

export default function Home() {
  return (
    <div className="flex justify-center">
      <div>
        <PageTitle text={<Translation id={'pageTitle'} namespace="Dish" />} />
        <div className="justify-center">
          <div className="flex flex-wrap justify-center">LIST</div>
        </div>
      </div>
    </div>
  );
}
