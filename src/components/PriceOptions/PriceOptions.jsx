import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions =[
        
    
              {
                "id": 1,
                "name": "Basic Membership",
                
                "features": [
                  "Access to cardio equipment",
                  "Access to weightlifting area",
                  "Limited group fitness classes",
                  "Locker room access",
                  "Discounts on merchandise"
                ],
                "price": 30.00
              },
              {
                "id": 2,
                "name": "Standard Membership",
                
                "features": [
                  "Access to cardio equipment",
                  "Access to weightlifting area",
                  "Unlimited group fitness classes",
                  "Access to swimming pool",
                  "Sauna access",
                  "Locker room access",
                  "Discounts on merchandise"
                ],
                "price": 50.00
              },
              {
                "id": 3,
                "name": "Premium Membership",
               
                "features": [
                  "Access to cardio equipment",
                  "Access to weightlifting area",
                  "Unlimited group fitness classes",
                  "Access to swimming pool",
                  "Sauna access",
                  "Locker room access",
                  "Discounts on merchandise",
                  "Personal training sessions (2 sessions/month)",
                  "Nutritional counseling"
                ],
                "price": 80.00
              }
            ];
          
          
    

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;