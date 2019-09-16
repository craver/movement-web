<script>
  import Select from 'svelte-select';

  let items = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'pizza', label: 'Pizza'},
    {value: 'cake', label: 'Cake'},
    {value: 'chips', label: 'Chips'},
    {value: 'ice-cream', label: 'Ice Cream'},
  ];
</script>

<style>
  h1 {
    color: green;
  }
  
  .test1 {
    color: white;
 background-color: rgba(10, 10, 10, 0.96);

overflow: visible;
  }

  .test2 {
    position: absolute;
    width: 216.01px;
    height: 210.91px;
    left: 719px;
    top: 358.61px;

    background: #454332;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(-25.39deg);
  }
</style>

<svelte:head>
	<title>About</title> 
</svelte:head>

<h1 class="test2">About this site</h1>

<p>This 2 2 is the 'about' page. There's not much here22.</p>

<svg transform="rotate(30 20,40)" xmlns="http://www.w3.org/2000/svg" width="297" height="43" >
 <text x="10" y="20" style="fill:red;">Several lines:
    <tspan x="10" y="45">First line.</tspan>
    <tspan x="10" y="70">Second line.</tspan>
  </text>
<path d="M 0 8 C 0 3.582 3.582 0 8 0 L 289 0 C 293.418 0 297 3.582 297 8 L 297 28 C 297 32.418 293.418 36 289 36 L 159 36 L 152 43 L 145 36 L 8 36 C 3.582 36 0 32.418 0 28 Z" fill="hsla(0, 0%, 11%, 0.72)">


</path>
<a class="test1">sdfsdfsdf</a>
</svg>

<svg height="30" width="200">
  <text x="0" y="15" fill="red">I love SVG!</text>
</svg>