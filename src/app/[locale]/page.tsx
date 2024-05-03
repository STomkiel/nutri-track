import PageTitle from '../components/pageTitle/PageTitle';
import Translation from '../translation/Translation';
import data from '../../../mockData/foodTypes.json';
import Link from 'next/link';
import DishTypeCard from '../components/dishTypeCard/DishTypeCard';

export default function Home() {
  return (
    <div className="flex justify-center">
      <div>
        <PageTitle text={<Translation id={'pageTitle'} namespace="Dish" />} />
        <div className="justify-center">
          <div className="flex flex-wrap justify-center">
            {data.types.map((typeItem) => (
              <div key={typeItem.name_id} className="m-2">
                <Link href={`/recipe/${typeItem.name_id}`}>
                  <DishTypeCard
                    dishType={typeItem.name_id}
                    imgSrc={typeItem.img_src}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
