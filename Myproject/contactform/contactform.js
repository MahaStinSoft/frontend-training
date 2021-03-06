<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
<div class="container p-3 my-3 border">
  <h1>My First Bootstrap Page</h1>
  <p>This container has a border and some extra padding and margins.</p>
</div>
<div class="container p-3 my-3 bg-dark text-white">
  <h1>My First Bootstrap Page</h1>
  <p>This container has a dark background color and a white text, and some extra padding and margins.</p>
</div>
<div class="container p-3 my-3 bg-primary text-white">
  <h1>My First Bootstrap Page</h1>
  <p>This container has a blue background color and a white text, and some extra padding and margins.</p>
</div>
<div class="container">
  <h1>Responsive Containers</h1>
  <p>Resize the browser window to see the effect.</p>
</div>
<div class="container-sm border">.container-sm</div>
<div class="container-md mt-3 border">.container-md</div>
<div class="container-lg mt-3 border">.container-lg</div>
<div class="container-xl mt-3 border">.container-xl</div>
<div class="container-fluid">
<h1>Grid basic</h1>
<div class="row">
<div class="col-sm-6" style="background-color:pink;">column</div>
<div class="col" style="background-color:violet;">column</div>
<div class="col" style="background-color:pink;">column</div>
<div class="col" style="background-color:violet;">column</div>
</div>
</div><br>
<div class="container">
<h1>Bootstrap <small>Heading</small></h1><!--small-->
<h2>Bootstrap <mark>Heading</mark></h2><!--mark-->
<h3>Bootstrap <code>Heading</code></h3><!--code-->
<h4>Bootstrap Heading<span class="badge badge-secondary">badge</span></h4>
<h5>Bootstrap Heading</h5>
<h6>Bootstrap Heading</h6>
</div>
<div class="container">
<h1 class="display-1">Bootstrap Heading</h1>
<h2 class="display-2">Bootstrap Heading</h2>
<h3 class="display-3">Bootstrap Heading</h3>
<h4 class="display-4">Bootstrap Heading</h4>
<h2><b>Abbrevation</b></h2>
<blockquote class="blockquote">
<p>the <abbr title="world health organization">WHO</abbr> was found in 1948.</p>
<h1>Blockquotes</h1>
<footer class="blockquote-footer">From WWF,s Website</footer>
</blockquote>
<h1>Description List</h1>
<dl>
<dt>coffee</dt>
<dd>-hot drink</dd>
<dt>milk</dt>
<dd>-hot milk</dd>
</dl>
<p>computer science <kbd>data science</kbd> oops python html</p>
<p>computer science <pre>data science oops python html</pre> </p>
<h3 class="text-muted">Bootstrap</h3>
<h3 class="text-primary">Bootstrap</h3>
<h3 class="text-sucess">Bootstrap</h3>
<h3 class="text-info">Bootstrap</h3>
<h3 class="text-warning">Bootstrap</h3>
<h3 class="text-danger">Bootstrap</h3>
<h3 class="text-secondary">Bootstrap</h3>
<h3 class="text-dark">Bootstrap</h3>
<h3 class="text-body">Bootstrap</h3>
<h3 class="text-light">Bootstrap</h3>
<h3 class="text-white">Bootstrap</h3>
<h1>hover link -contextual</h1>
<span class="badge badge-primary"><b>Bootstrap badge</b></span><br>
<a href="#" class="text-primary"><b>Bootstrap</b></a><br>
<span class="badge badge-warning"><b>Bootstrap badge</b></span><br>
<a href="#" class="text-info"><b>Bootstrap</b></a><br>
<a href="#" class="text-warning"><b>Bootstrap</b></a><br>
<a href="#" class="text-danger"><b>Bootstrap</b></a><br>
<a href="#" class="text-secondary"><b>Bootstrap</b></a><br>
<a href="#" class="text-dark"><b>Bootstrap</b></a><br>
<a href="#" class="text-body"><b>Bootstrap</b></a><br>
<a href="#" class="text-light"><b>Bootstrap</b></a><br>
<a href="#" class="text-white"><b>Bootstrap</b></a><br>
<p class="bg-primary text-white">Bootstrap html css</p>
<p class="bg-muted text-white">Bootstrap html css</p>
<p class="bg-success text-white">Bootstrap html css</p>
<p class="bg-info text-white">Bootstrap html css</p>
<p class="bg-warning text-white">Bootstrap html css</p>
<p class="bg-danger text-white">Bootstrap html css</p>
<p class="bg-secondary text-white">Bootstrap html css</p>
<p class="bg-dark text-white">Bootstrap html css</p>
<p class="bg-body text-white">Bootstrap html css</p>
<p class="bg-light text-white">Bootstrap html css</p>
<p class="bg-white text-white">Bootstrap html css</p>
<h1>Table</h1>
<table class="table table-striped table-bordered table-hover table-dark">
<tr>
<thead>
<th>Firstname</th>
<th>Lastname</th>
<th>Email</th>
</thead>
</tr>
<tr>
<td>maha</td>
<td>kaviya</td>
<td>maha@123</td>
</tr>
<tr>
<td>kalai</td>
<td>vani</td>
<td>kalai@123</td>
</tr>
<tr>
<td>anu</td>
<td>priya</td>
<td>anu@123</td>
</tr>
</table>
<table class="table">
<thead class="thead-dark">
<tr>
<th>Firstname</th>
<th>Lastname</th>
<th>Email</th>
</tr>
<tr class="table-primary">
<td>maha</td>
<td>kaviya</td>
<td>maha@123</td>
</tr>
<tr class="table-success">
<td>kalai</td>
<td>vani</td>
<td>kalai@123</td>
</tr>
<tr class="table-danger">
<td>anu</td>
<td>priya</td>
<td>anu@123</td>
</tr>
<tr class="table-info">
<td>maha</td>
<td>kaviya</td>
<td>maha@123</td>
</tr>
<tr class="table-warning">
<td>kalai</td>
<td>vani</td>
<td>kalai@123</td>
</tr>
<tr class="table-active">
<td>anu</td>
<td>priya</td>
<td>anu@123</td>
</tr>
<tr class="table-secondary">
<td>maha</td>
<td>kaviya</td>
<td>maha@123</td>
</tr>
<tr class="table-light text-dark">
<td>kalai</td>
<td>vani</td>
<td>kalai@123</td>
</tr>
<tr class="table-dark text-dark">
<td>anu</td>
<td>priya</td>
<td>anu@123</td>
</tr>
</table>
<table class="table table-bordered table-sm">
<tr>
<thead>
<th>Firstname</th>
<th>Lastname</th>
<th>Email</th>
</thead>
</tr>
<tr>
<td>maha</td>
<td>kaviya</td>
<td>maha@123</td>
</tr>
<tr>
<td>kalai</td>
<td>vani</td>
<td>kalai@123</td>
</tr>
<tr>
<td>anu</td>
<td>priya</td>
<td>anu@123</td>
</tr>
<br>
<div class="table-responsive-lg">
<table class="table table-bordered">
<tr>
<thead>
<th>s.no</th>
<th>Firstname</th>
<th>Lastname</th>
<th>Age</th>
<th>City</th>
<th>Country</th>
<th>Sex</th>
<th>Example</th>
<th>Example</th>
<th>Example</th>
<th>Example</th>
<th>Example</th>
<th>Example</th>
<th>Example</th>
<th>Example</th>
<th>Example</th>
<th>Example</th>
<th>Example</th>
<th>Example</th>
</tr>
</thead>
<tr>
<td>1</td>
<td>Anna</td>
<td>Pitt</td>
<td>35</td>
<td>New York</td>
<td>USA</td>
<td>Female</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
</div>
</table>
<div class="container">
<h1>Image</h1>
<p>rounded corner</p>
<img src="IMAGE/babydoll.jpg" class="rounded-circle" alt="babydoll" width="350" height="250"><br>
<br>
<img src="IMAGE/babydoll.jpg" class="img-thumbnail float-center" alt="babydoll" width="350" height="250">
<br><br>
<img src="IMAGE/babydoll.jpg" class="float-right" alt="babydoll" width="350" height="250">
<br>
</div>
<div class="container">
<h3>Image Fluid</h3>
<img class="img-fluid" src="IMAGE/babydoll.jpg" alt="babydoll" width="350" height="250">
</div>
<br>
<div class="jumbotron jumbotorn-fluid">
<div class="container">
<h1>Jumbotron</h1>
<p>html css bootstrap javascript...</p>
</div>
<p>some txt...</p>
<p>some txt...</p>
</div>
<div class="container">
<div class="jumbotron">
<h1>Jumbotron</h1>
<p>html bootstrap css javascript</p>
</div>
<p>text....</p>
<p>text....</p>
</div>
<div class="container">
<h1>Alerts</h1>
<div class="alert alert-success">
<strong>success!</strong>Bootstrap version4.
</div>
<div class="alert alert-info">
<strong>Info!</strong>Bootstrap version4.
</div>
<div class="alert alert-warning">
<strong>warning!</strong>Bootstrap version4.
</div>
<div class="alert alert-danger">
<strong>danger!</strong>Bootstrap version4.
</div>
<div class="alert alert-secondary">
<strong>secondary!</strong>Bootstrap version4.
</div>
<div class="alert alert-dark">
<strong>dark!</strong>Bootstrap version4.
</div>
<div class="alert alert-light">
<strong>light!</strong>Bootstrap version4.<a href="#" class="alert-link">message link.</a>
</div>
</div>
<h1>Alert Link</h1>
<div class="alert alert-success">
<strong>Success!</strong> You should <a href="#" class="alert-link">read this message</a>.
</div>
<div class="alert alert-secondary ">
<strong>Secondary!</strong> You should <a href="#" class="alert-link">read this message</a>.
</div>
<div class="alert alert-success alert-dismissible ">
<button type="button" class="close" data-dismiss="alert">&times;</button>
<strong>Success!</strong> This alert box could indicate a successful or positive action.
</div>
<div class="alert alert-danger alert-dismissible ">
<button type="button" class="close" data-dismiss="alert">&times;</button>
<strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
</div>
<div class="alert alert-danger alert-dismissible fade show">
<button type="button" class="close" data-dismiss="alert">&times;</button>
<strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
</div>
<div class="alert alert-success alert-dismissible fade show">
<button type="button" class="close" data-dismiss="alert">&times;</button>
<strong>Success!</strong> This alert box could indicate a successful or positive action.
</div>
<h2>Button elements</h2>
<a href="#" class="btn btn-info"
role="button">Link </a>
<br><br>
<a href="#" class="btn btn-outline-info"
role="button">Link </a>
<br><br>
<button type="button" class="btn btn-primary btn-lg">Large</button>
<br><br>
<button type="button" class="btn btn-primary btn-block">full width</button>
<h2>Button status</h2>
<button type="button" class="btn btn-primary active ">Active</button>
<button type="button" class="btn btn-primary disabled">Disable</button>
<h1>spinner button</h1>
<button class="btn btn-success">
<span class="spinner-border spinner-border-lg"></span>
</button>
<br><br>
<button class="btn btn-warning">
<span class="spinner-border spinner-border-lg"></span>
Loading</button>
<h1>Buttongroup</h1>
<div class="btn-group ">
<button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown">HTML</button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">List</a>
<a class="dropdown-item" href="#">Table</a>
</div>
</div>
<button type="button" class="btn btn-danger">CSS</button>
<div class="btn-group">
<button type="button" class="btn btn-success  dropdown-toggle" data-toggle="dropdown">js</button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">react</a>
<a class="dropdown-item" href="#">nodejs</a>
</div>
</div><br><br>
<h1>vertical button</h1>
<div class="btn-group-vertical">
<button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">HTML</button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Table</a>
<a class="dropdown-item" href="#">List</a>
</div>
<button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">CSS</button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Forms</a>
<a class="dropdown-item" href="#">List</a>
</div>
<button type="button" class="btn btn-danger">js</button>
<br>
</div>
<h1>button side by side</h1>
<div class="btn-group">
<button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">HTML</button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Table</a>
<a class="dropdown-item" href="#">List</a>
</div>
<button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">CSS</button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Forms</a>
<a class="dropdown-item" href="#">List</a>
</div>
<button type="button" class="btn btn-danger">js</button>
<br>
</div>
<div class="btn-group">
<button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">HTML</button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Table</a>
<a class="dropdown-item" href="#">List</a>
</div>
<button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">CSS</button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Forms</a>
<a class="dropdown-item" href="#">List</a>
</div>
<button type="button" class="btn btn-danger">js</button>
<br>
</div>

<br><br>
<h3>SPlit button</h3>
<div class="btn-group">
<button type="button" class="btn btn-primary">HTML</button>
<button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
<span class="caret">
<div class="dropdown-menu">
<a class="dropdown-item" href="#">List</a>
<a class="dropdown-item" href="#">Table</a>
</div>
</button>
</div>
<h3>badge inside button</h3>
<button type="button" class="btn btn-primary">
Messages <span class="badge badge-light">5</span>
</button>
<button type="button" class="btn btn-primary">
notifications <span class="badge badge-light">8</span>
</button>
<br>
<h3>progress</h3>
<div class="progress" style="height:10px">
<div class="progress-bar" style="width:50%;height:20px">
</div>
</div><br>
<div class="progress" style="height:10px">
<div class="progress-bar" style="width:90%;height:30px">
</div>
</div>
<br>
<h3>colored progress</h3>
<div class="progress">
<div class="progress-bar" style="wi
</div>
</body>
</html>









