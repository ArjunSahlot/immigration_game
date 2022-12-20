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

	<section class="mx-auto w-max border-4">
		<div
			class="striped grid h-[384px] w-[320px] grid-cols-5 grid-rows-6 rounded-md bg-tealish p-1 outline outline-4 outline-offset-2 outline-gray-900  child:h-[64px] child:w-[64px]  child:border-[3px] child:border-gray-200 child:text-center "
		>
			<div>1</div>
			<div>2</div>
			<div>3</div>
			<div>4</div>
			<div>5</div>
			<div>6</div>
			<div class="border-3 rounded-sm border-x-4 border-r-[6px] border-gray-900 border-b-inherit">
				7
			</div>
			<div>8</div>
			<div>9</div>
			<div>10</div>
			<div>11</div>
			<div
				class="border-3 rounded-sm border-r-[3px] border-gray-900 border-y-inherit border-l-inherit"
			>
				12
			</div>
			<div
				class="border-3 rounded-sm border-t-4 border-l-[3px] border-gray-900 border-r-inherit border-b-inherit"
			>
				13
			</div>
			<div class="border-3 rounded-sm border-t-4 border-gray-900 border-x-inherit border-b-inherit">
				14
			</div>
			<div>15</div>
			<div>16</div>
			<div
				class="border-3 rounded-sm border-l-[3px] border-b-[5px] border-gray-900 border-t-inherit border-r-inherit"
			>
				17
			</div>
			<div>18</div>
			<div
				class="border-3 rounded-sm border-t-4 border-l-[4px] border-gray-900 border-r-inherit border-b-inherit"
			>
				19
			</div>
			<div>20</div>
			<div>21</div>
			<div>22</div>
			<div>23</div>
			<div
				class="border-3 rounded-sm border-r-[5px] border-gray-900 border-y-inherit border-l-inherit"
			>
				24
			</div>
			<div>25</div>
			<div>26</div>
			<div>27</div>
			<div>28</div>
			<div>29</div>
			<div>30</div>
		</div>
	</section>

	<!-- <section class="flex justify-center">
		<div
			class="striped grid h-[128px] w-[192px] grid-cols-3 bg-tealish outline outline-4 outline-gray-900 child:h-[64px] child:w-[64px] child:border-2"
		>
			<div>Item 1</div>
			<div>Item 2</div>
			<div>Item 3</div>
			<div>Item 1</div>
			<div>Item 2</div>
			<div>Item 3</div>
		</div>
	</section> -->

	<section class="flex justify-center ">
		<h2 class="m-2 w-auto rounded-md border-4 border-gray-200 p-2 text-center font-body text-xl">
			Created By: Arjun, Mihir, & Ajay (4th Period)
		</h2>
	</section>
</main>
