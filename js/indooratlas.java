IndoorAtlas ia = IndoorAtlasFactory.createIndoorAtlas(context, listener, 417dd299-7688-464e-9a25-be5ee7bf85ef, 1P(e0YFvjEnKuqMyhX4N2H8XUqI%Y6RiKpi95(TUBno!o)IYDYaxBavttrlFF8pF63rwWITGkakqruUR(vlH5W%SaLmp3ehZWMg3uUFxHocyqqqFuOJ1y76hsGZGRZEf);

FutureResult<FloorPlan> result = ia.fetchFloorPlan(floorPlanId);
result.setCallback(new ResultCallback<FloorPlan>() {
            @Override
            public void onResult(final FloorPlan result) {
                mFloorPlan = result;
                loadFloorPlanImage(result);
            }
            // handle error conditions too
}

void loadFloorPlanImage(FloorPlan floorPlan) {
  BitmapFactory.Options options = createBitmapOptions(floorPlan);
  FutureResult<Bitmap> result = ia.fetchFloorPlanImage(floorPlan, options);
  result.setCallback(new ResultCallback<Bitmap>() {
            @Override
            public void onResult(final Bitmap result) {
               // now you have floor plan bitmap, do something with it
               updateImageViewInUiThread(result);
            }
            // handle error conditions too
  }
}

ia.startPositioning(venueId, floorId, floorPlanId);

public void onServiceUpdate(ServiceState state) {

   // get position on original floor plan image
   int i = state.getImagePoint().getI();
   int j = state.getImagePoint().getJ();

   // take into account how your floor plan image has been scaled
   // and draw position
   PointF scaledPoint = new PointF();
   Util.calculateScaledPoint((int) floorPlan.dimensions[0], (int) floorPlan.dimensions[1], i, j, mImageView, scaledPoint);

   drawNewPositionInUiThread(scaledPoint.x, scaledPoint.y);

}