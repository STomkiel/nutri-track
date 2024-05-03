import PageTitle from './components/pageTitle/PageTitle';

export default function Home() {
  return (
    <div className="flex justify-center">
      <div>
        <PageTitle text="Recipies by dish type" />
        <div className="justify-center">
          <div className="flex flex-wrap justify-center">LIST</div>
        </div>
      </div>
    </div>
  );
}
