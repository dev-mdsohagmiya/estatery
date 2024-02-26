export default function Body() {
  const detailsList = [
    { key: "Listed on", value: "1 week" },
    { key: "Date available", value: "Available now" },
    { key: "Type", value: "Home" },
    { key: "Laundry", value: "In unit" },
    { key: "Cooling", value: "Air Conditioner" },
    { key: "Heating", value: "Forced Air" },
  ];
  return (
    <div>
      <div className="grid gap-[10px]">
        <div>
          <h2 className="font-bold text-[20px] md:text-[24px] text-primary">
            About this home
          </h2>
        </div>
        <div>
          <p className="text-[14px] md:text-[16px] font-medium">
            Check out that Custom Backyard Entertaining space! 3500 sqft, 3
            Bedrooms, 2 Bathrooms house on a Lake Villa street in the Serenity
            Haven neighborhood of Texas. Well cared for with tons of upgrades!
            Newer stainless steel appliances will stay with the unit, including
            dishwasher, fridge, stove, microwave, and washer and dryer. Tenant
            pays electricity and gas bills. Water, Sewer, and Trash are covered
            by Landlord. Tenant is responsible for lawncare and snow removal.
            Landlord provides lawn mower.
          </p>
        </div>
        <div className="py-3">
          <div className="h-[2px] w-full bg-grayline"></div>
        </div>
        <div>
          <h2 className="font-bold text-[20px] md:text-[24px] text-primary">
            Properties features
          </h2>
        </div>
        <div>
          <div className="grid grid-cols-12">
            <div className="col-span-6">
              {detailsList.map((item) => (
                <div key={item.key} className="grid grid-cols-12">
                  <div className="col-span-6">
                    <h4 className="text-graylight text-[14px] md:text-[16px] font-medium">
                      {item.key}
                    </h4>
                  </div>
                  <div className="col-span-6 flex justify-end">
                    <h4 className="text-primary text-[16px] md:text-[18px] font-bold">
                      {item.value}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="py-3">
          <div className="h-[2px] w-full bg-grayline"></div>
        </div>
        <div className="py-3">
          <div className="h-[2px] w-full bg-grayline"></div>
        </div>
        <div className="py-3">
          <div className="h-[2px] w-full bg-grayline"></div>
        </div>
        <div>
          <p className="text-[13px] md:text-[14px] text-graylight font-medium">
            You agree to Estatery's Terms of Use & Privacy Policy. By choosing
            to contact a property, you also agree that Estatery Group,
            landlords, and property managers may call or text you about any
            inquiries you submit through our services, which may involve use of
            automated means and prerecorded/artificial voices. You don't need to
            consent as a condition of renting any property, or buying any other
            goods or services. Message/data rates may apply.
          </p>
        </div>
      </div>
    </div>
  );
}
