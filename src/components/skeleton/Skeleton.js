import './skeleton.scss';

const Skeleton = () => {
   return (
      <div className="search__skeleton skeleton">
         <div className="skeleton__item">
            <div className="pulse skeleton__img"></div>
            <div className="skeleton__inner">
               <h1 className="pulse skeleton__title"></h1>
               <p className="pulse skeleton__description"></p>
            </div>
         </div>
         <div className="skeleton__item">
            <div className="pulse skeleton__img"></div>
            <div className="skeleton__inner">
               <h1 className="pulse skeleton__title"></h1>
               <p className="pulse skeleton__description"></p>
            </div>
         </div>
         <div className="skeleton__item">
            <div className="pulse skeleton__img"></div>
            <div className="skeleton__inner">
               <h1 className="pulse skeleton__title"></h1>
               <p className="pulse skeleton__description"></p>
            </div>
         </div>
      </div>

   )
}

export default Skeleton;