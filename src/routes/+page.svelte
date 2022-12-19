<script>
	import './app.css';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="m-4 space-y-4">
	<section class="">
		<h1 class="text-center font-body text-4xl underline underline-offset-4">Escape</h1>
	</section>

	<section class="flex justify-center ">
		<h2 class="m-4 w-2/3 rounded-md border-4 border-gray-200 p-2 text-center font-body text-2xl">
			The gaurd moves twice for every move you make! He will only make moves towards you and will
			try to walk horizontally first. Use the arrow keys to play!
		</h2>
	</section>

	<section
		class="striped mx-auto grid h-96 w-96 grid-cols-5 grid-rows-6 place-content-start items-center rounded-md border-[3px] border-gray-900  bg-tealish p-1  child:h-full child:w-full child:rounded-sm child:border-[2px] child:border-gray-200 child:text-center child:align-middle "
	>
		<div>1</div>
		<div>2</div>
		<div>3</div>
		<div>4</div>
		<div>5</div>
		<div>6</div>
		<div>7</div>
		<div>8</div>
		<div>9</div>
		<div>10</div>
		<div>11</div>
		<div>12</div>
		<div>13</div>
		<div>14</div>
		<div>15</div>
		<div>16</div>
		<div>17</div>
		<div>18</div>
		<div>19</div>
		<div>20</div>
		<div>21</div>
		<div>22</div>
		<div>23</div>
		<div>24</div>
		<div>25</div>
		<div>26</div>
		<div>27</div>
		<div>28</div>
		<div>29</div>
		<div>30</div>
	</section>
	<!-- <div
		class="striped grid grid-cols-3 rounded-sm border-[3px] border-gray-900 bg-tealish p-[1px] child:rounded-sm child:border-[2px] child:border-gray-100"
	>
		<div>Item 1</div>
		<div>Item 2</div>
		<div>Item 3</div>
		<div>Item 1</div>
		<div>Item 2</div>
		<div>Item 3</div>
	</div> -->

	<section class="flex justify-center ">
		<h2 class="m-2 w-auto rounded-md border-4 border-gray-200 p-2 text-center font-body text-xl">
			Created By: Arjun, Mihir, & Ajay (4th Period)
		</h2>
	</section>
</main>
