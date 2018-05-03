(function(){

    var github = function ($http) {

        var getUser = function (username) {
            console.log("hello");
            return $http.get("https://api.github.com/users/"+ username)
                .then(function (response) {
                    console.log(response.data)
                    return response.data;
                })

        };

        var getRepos = function (user) {
            return $http.get(user.repos_url)
                .then(function (response) {
                    return response.data;
                })
        };

        var getRepoDetails = function(username, reponame)
        {
           var repo;
           var repoUrl = "https://api.github.com/repos/"+ username + "/" + reponame;

           return $http.get(repoUrl)
               .then(function(response){
                    repo = response.data;
                    return $http.get(repoUrl + "/contributors")
               })
               .then(function (response) {
                   repo.contributors = response.data;
                   return repo;
               })
        }

        return{
            getUser : getUser,
            getRepos : getRepos,
            getRepoDetails : getRepoDetails
        };
    }

    var module = angular.module("githubViewer");//to get a reference to the module already created and
                                                //that will allow me to register my service

    //register a service with Angular
    //module.factory("nameService", nameFunction)
    module.factory("github", github);
}());