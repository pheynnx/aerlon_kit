-- CreateTable
CREATE TABLE "Post" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "slug" STRING NOT NULL,
    "date" TIMESTAMP NOT NULL,
    "title" STRING NOT NULL,
    "series" STRING NOT NULL,
    "markdown" STRING NOT NULL,
    "categories" STRING[],
    "postSnippet" STRING NOT NULL,
    "published" BOOL NOT NULL,
    "featured" BOOL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Post_title_key" ON "Post"("title");
