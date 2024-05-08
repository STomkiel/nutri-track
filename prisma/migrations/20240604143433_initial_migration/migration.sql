-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DishType" (
    "name_id" TEXT NOT NULL,
    "img_src" TEXT NOT NULL,

    CONSTRAINT "DishType_pkey" PRIMARY KEY ("name_id")
);

-- CreateTable
CREATE TABLE "Dish" (
    "name_id" TEXT NOT NULL,
    "type_id" TEXT NOT NULL DEFAULT 'Unknown',
    "description" TEXT NOT NULL,
    "img_src" TEXT NOT NULL,
    "ingredients" TEXT[],
    "fat" DECIMAL(65,30) NOT NULL,
    "protein" DECIMAL(65,30) NOT NULL,
    "carbs" DECIMAL(65,30) NOT NULL,
    "instruction" TEXT[],

    CONSTRAINT "Dish_pkey" PRIMARY KEY ("name_id")
);

-- CreateTable
CREATE TABLE "Meal" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL DEFAULT 'Unknown',
    "dish_id" TEXT,
    "name" TEXT,
    "fat" DECIMAL(65,30),
    "protein" DECIMAL(65,30),
    "carbs" DECIMAL(65,30),

    CONSTRAINT "Meal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Dish" ADD CONSTRAINT "Dish_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "DishType"("name_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_dish_id_fkey" FOREIGN KEY ("dish_id") REFERENCES "Dish"("name_id") ON DELETE SET NULL ON UPDATE CASCADE;
