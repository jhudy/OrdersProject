app.service("crudAJService", function($http) {

    //get All Categories
    this.getCategories = function () {
        var result = $http.get('http://localhost:33991/api/Categories');
        return result;
    };

    // get Category by CategoryId
    this.getCategory = function (CategoryId) {
        //var response = $http({
        //    method: "GET",
        //    url: "api/Categories",
        //    params: {
        //        id: JSON.stringify(CategoryId)
        //    }
        //});
        var response = $http.get("http://localhost:33991/api/Categories", {
            params: { id: CategoryId }
        });
        var mydesc = response.description;
        return response;
    }

    // Update Category 
    this.updateCategory = function (category) {
        var serializedData = $.data({ Id: category.Id, Description: category.Description });
        var data = JSON.stringify(category);
       
        var response = $http({
            method: "PUT",
            params: { id: category.Id },
            url: "http://localhost:33991/api/Categories",
            data: data,
            headers: { "Content-Type": "application/json; charset=utf-8" }
        }).then(function (result) {
            console.log(result);
        }, function (error) {
            console.log(error);
        });
     
        return response;
    }

    // Add Category
    this.AddCategory = function (category) {
        var response = $http({
            method: "post",
            url: "http://localhost:33991/api/Categories",
            data: JSON.stringify(category),
            dataType: "json"
        });
        return response;
    }

    //Delete Category
    this.deleteCate = function (categoryId) {
        var response = $http({
            method: "delete",
            url: "http://localhost:33991/api/Categories",
            params: {
                Id: JSON.stringify(categoryId)
            }
        });
        return response;
    }
});

appProducts.service("ServiceProducts", function ($http) {

    //get All Products
    this.getProducts = function () {
        var result = $http.get('http://localhost:33991/api/Products');
        return result;
    };

    // get Product by CProductId
    this.getCategory = function (ProductId) {   
        var response = $http.get("http://localhost:33991/api/Products", {
            params: { id: ProductId }
        });
        var mydesc = response.description;
        return response;
    }

    // Update Product 
    this.updateProduct = function (product) {
        var serializedData = $.data({ Id: product.Id, Name: product.Name, Price: product.Price, Rank: product.Rank, Category_Id: product.Category_Id });
        var data = JSON.stringify(product);

        var response = $http({
            method: "PUT",
            params: { id: product.Id },
            url: "http://localhost:33991/api/Products",
            data: data,
            headers: { "Content-Type": "application/json; charset=utf-8" }
        }).then(function (result) {
            console.log(result);
        }, function (error) {
            console.log(error);
        });

        return response;
    }

    // Add Product
    this.AddProduct = function (product) {
        var response = $http({
            method: "post",
            url: "http://localhost:33991/api/Products",
            data: JSON.stringify(product),
            dataType: "json"
        });
        return response;
    }

    //Delete Product
    this.deleteProd = function (productId) {
        var response = $http({
            method: "delete",
            url: "http://localhost:33991/api/Products",
            params: {
                Id: JSON.stringify(productId)
            }
        });
        return response;
    }

    //get All Categories
    this.getCategories2 = function () {
        var result = $http.get('http://localhost:33991/api/Categories');
        return result;
    };
});