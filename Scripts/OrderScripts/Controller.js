app.controller("mvcCRUDCtrl", function ($scope, crudAJService) {
    $scope.divCategory = false;
    GetAllCategories();

    //To Get all categories records  
    function GetAllCategories() {
        debugger;
        var getCategoryData = crudAJService.getCategories();
        getCategoryData.then(function (category) {
            $scope.categories = category.data;
            $scope.divCategory = false;
        }, function () {
            alert('Error in getting Category records');
        });
    }

    $scope.editCategory = function (category) {
        var getCategoryData = crudAJService.getCategory(category.Id);
        getCategoryData.then(function (_category) {
            $scope.category = _category.data;
            $scope.categoryID = category.Id;
            $scope.categoryDescription = category.Description;
            $scope.Action = "Update";
            $scope.divCategory = true;
        }, function () {
            alert('Error in getting Category records');
        });
    }

    $scope.AddUpdateCategory = function () {
        var Category = {
            Description: $scope.categoryDescription
        };
        var getCategoryAction = $scope.Action;

        if (getCategoryAction == "Update") {
            Category.Id = $scope.categoryID;
            var getCategoryData = crudAJService.updateCategory(Category);
            getCategoryData.then(function (msg) {
                GetAllCategories();
                alert(msg.data);
                $scope.divCategory = false;
            }, function () {
                alert('Error in updating Category record');
            });
        } else {
            var getCategoryData = crudAJService.AddCategory(Category);
            getCategoryData.then(function (msg) {
                GetAllCategories();
                alert('Category was created successfuly');
                $scope.divCategory = false;
            }, function () {
                alert('Error in adding Category record');
            });
        }
    }


    $scope.AddCategoryDiv = function () {
        ClearFields();
        $scope.Action = "Add";
        $scope.divCategory = true;
    }

    $scope.deleteCategory = function (category) {
        var getCategoryData = crudAJService.deleteCate(category.Id);
        getCategoryData.then(function (msg) {
            alert('Category was deleted succesfuly');
            GetAllCategories();
        }, function () {
            alert('Error in deleting Category record');
        });
    }
    function ClearFields() {
        $scope.categoryID = "";
        $scope.categoryDescription = "";
       
    }
    $scope.Cancel = function () {
        $scope.divCategory = false;
    };
});


appProducts.controller("CtrlProducts", function ($scope, ServiceProducts) {
    $scope.divProduct = false;
    $scope.sortType = 'ID'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order
    $scope.searchProduct = '';     // set the default search/filter term

    GetAllProducts();
    GetAllCategories();
    //To Get all categories records  
    function GetAllProducts() {
        debugger;
        var getProductData = ServiceProducts.getProducts();
        getProductData.then(function (product) {
            $scope.products = product.data;
            $scope.divProduct = false;
        }, function () {
            alert('Error in getting Products records');
        });
    }

    $scope.editProduct = function (product) {
        var getProductData = ServiceProducts.getProducts(product.Id);
        getProductData.then(function (_product) {
            $scope.product = _product.data;
            $scope.productID = product.Id;
            $scope.productName = product.Name;
            $scope.productPrice = product.Price;
            $scope.productRank = product.Rank;
            $scope.productCategoryId = product.Category_Id;
            $scope.Action = "Update";
            $scope.divProduct = true;
        }, function () {
            alert('Error in getting Product records');
        });
    }

    $scope.AddUpdateProduct = function () {
        var Product = {
            Name: $scope.productName,
            Price: $scope.productPrice,
            Rank: $scope.productRank,
            Category_Id: $scope.productCategoryId
        };
        var getProductAction = $scope.Action;

        if (getProductAction == "Update") {
            Product.Id = $scope.productID;
            var getProductData = ServiceProducts.updateProduct(Product);
            getProductData.then(function (msg) {
                GetAllProducts();
                alert(msg.data);
                $scope.divProduct = false;
            }, function () {
                alert('Error in updating Product record');
            });
        } else {
            var getProductData = ServiceProducts.AddProduct(Product);
            getProductData.then(function (msg) {
                GetAllProducts();
                alert('Product was created successfuly');
                $scope.divProduct = false;
            }, function () {
                alert('Error in adding Product record');
            });
        }
    }


    $scope.AddProductDiv = function () {
        ClearFields();
        $scope.Action = "Add";
        $scope.divProduct = true;
    }

    $scope.deleteProduct = function (Product) {
        var getProductData = ServiceProducts.deleteProd(Product.Id);
        getProductData.then(function (msg) {
            alert('Product '+Product.Name+' was deleted succesfuly');
            GetAllProducts();
        }, function () {
            alert('Error in deleting Product record');
        });
    }
    function ClearFields() {
        $scope.productID = "";
        $scope.productName = "";
        $scope.productPrice = "";
        $scope.productRank = "";
        $scope.productCategoryId = "";

    }
    $scope.Cancel = function () {
        $scope.divProduct = false;
    };

    
    //To Get all categories records  
    function GetAllCategories() {
        var getCategoryData = ServiceProducts.getCategories2();
        getCategoryData.then(function (category) {
            $scope.categories = category.data;           
        }, function () {
            alert('Error in getting Category records');
        });
    }

    $scope.GetCategoryName = function (id,categories) {
        //var cat = categories.get({ Id: id });
        return categories; //cat.Description;
    }

    $scope.range = function (min, max, step) {
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i += step) {
            input.push(i);
        }
        return input;
    };
});