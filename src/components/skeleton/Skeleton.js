import './skeleton.scss';

const Skeleton = () => {
   return (
      <div className="search__skeleton skeleton">
         <div className="skeleton__item">
            <div className="pulse skeleton__img"></div>
            <div className="skeleton__inner">
               <div className="pulse skeleton__title"></div>
               <p className="pulse skeleton__description"></p>
            </div>
         </div>
         <div className="skeleton__item">
            <div className="pulse skeleton__img"></div>
            <div className="skeleton__inner">
               <div className="pulse skeleton__title"></div>
               <p className="pulse skeleton__description"></p>
            </div>
         </div>
         <div className="skeleton__item">
            <div className="pulse skeleton__img"></div>
            <div className="skeleton__inner">
               <div className="pulse skeleton__title"></div>
               <p className="pulse skeleton__description"></p>
            </div>
         </div>
      </div>

   )
}

export default Skeleton;