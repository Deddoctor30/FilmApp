import './skeletonItem.scss';

const SkeletonItem = () => {
   return (
      <div className="spinner">
         <div className="spinner__item">
            <div className="pulse spinner__img"></div>
            <div className="spinner__inner">
               <div className="pulse spinner__title"></div>
               <div className='spinner__description'>
                  <div className="pulse spinner__description-one"></div>
                  <div className="pulse spinner__description-two"></div>
               </div>
               <div className="pulse spinner__description-three"></div>
            </div>
         </div>
         <div className="pulse spinner__second-item"></div>
      </div>

   )
}

export default SkeletonItem;