export const typescriptCodePreview = /* html */ `\
<span class="TOKEN_keyword">export</span> <span class="TOKEN_keyword">type</span> <span class="TOKEN_type">Todo</span> <span class="TOKEN_operator">=</span> <span class="TOKEN_punctuation">{</span>
  id<span class="TOKEN_operator">:</span> <span class="TOKEN_type">string</span><span class="TOKEN_punctuation">;</span>
  text<span class="TOKEN_operator">:</span> <span class="TOKEN_type">string</span><span class="TOKEN_punctuation">;</span>
  completed<span class="TOKEN_operator">:</span> <span class="TOKEN_type">boolean</span><span class="TOKEN_punctuation">;</span>
<span class="TOKEN_punctuation">}</span>

<span class="TOKEN_keyword">export class</span> <span class="TOKEN_type">TodoService</span> <span class="TOKEN_punctuation">{</span>
  <span class="TOKEN_keyword">async</span> <span class="TOKEN_function">get</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_punctuation">)</span><span class="TOKEN_operator">:</span> <span class="TOKEN_type">Promise</span><span class="TOKEN_punctuation">&lt;</span><span class="TOKEN_type">Todo</span><span class="TOKEN_punctuation">[]</span><span class="TOKEN_punctuation">&gt;</span> <span class="TOKEN_punctuation">{</span>
    <span class="TOKEN_keyword">const</span> todos <span class="TOKEN_operator">=</span> <span class="TOKEN_keyword">await</span> <span class="TOKEN_keyword">this</span><span class="TOKEN_punctuation">.</span>env<span class="TOKEN_punctuation">.</span>TODOS<span class="TOKEN_punctuation">.</span><span class="TOKEN_function">get</span><span class="TOKEN_punctuation">&lt;</span><span class="TOKEN_type">Todo</span><span class="TOKEN_punctuation">[]</span><span class="TOKEN_punctuation">&gt;</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_keyword">this</span><span class="TOKEN_punctuation">.</span>userID<span class="TOKEN_punctuation">,</span> <span class="TOKEN_string">"json"</span><span class="TOKEN_punctuation">)</span>
    <span class="TOKEN_keyword">return</span> todos <span class="TOKEN_operator">||</span> <span class="TOKEN_punctuation">[]</span><span class="TOKEN_punctuation">;</span>
  <span class="TOKEN_punctuation">}</span>

  <span class="TOKEN_keyword">async</span> <span class="TOKEN_function">set</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_parameter">todos</span><span class="TOKEN_operator">:</span> <span class="TOKEN_type">Todo</span><span class="TOKEN_punctuation">[])</span><span class="TOKEN_operator">:</span> <span class="TOKEN_type">Promise</span><span class="TOKEN_punctuation">&lt;</span><span class="TOKEN_type">Todo</span><span class="TOKEN_punctuation">[]</span><span class="TOKEN_punctuation">&gt;</span> <span class="TOKEN_punctuation">{</span>
    <span class="TOKEN_keyword">const</span> sorted <span class="TOKEN_operator">=</span> <span class="TOKEN_parameter">todos</span><span class="TOKEN_punctuation">.</span><span class="TOKEN_function">sort</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_parameter">t1</span><span class="TOKEN_punctuation">,</span> <span class="TOKEN_parameter">t2</span><span class="TOKEN_punctuation">)</span> <span class="TOKEN_keyword">=&gt;</span> <span class="TOKEN_punctuation">{</span>
      <span class="TOKEN_keyword">if</span> <span class="TOKEN_punctuation">(</span><span class="TOKEN_parameter">t1</span><span class="TOKEN_punctuation">.</span>completed <span class="TOKEN_operator">===</span> <span class="TOKEN_parameter">t2</span><span class="TOKEN_punctuation">.</span>completed<span class="TOKEN_punctuation">)</span> <span class="TOKEN_punctuation">{</span>
        <span class="TOKEN_keyword">return</span> <span class="TOKEN_parameter">t1</span><span class="TOKEN_punctuation">.</span>id<span class="TOKEN_punctuation">.</span><span class="TOKEN_function">localeCompare</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_parameter">t2</span><span class="TOKEN_punctuation">.</span>id<span class="TOKEN_punctuation">)</span><span class="TOKEN_punctuation">;</span>
      <span class="TOKEN_punctuation">}</span>
      <span class="TOKEN_keyword">return</span> <span class="TOKEN_parameter">t1</span><span class="TOKEN_punctuation">.</span>completed <span class="TOKEN_operator">?</span> <span class="TOKEN_number">1</span> <span class="TOKEN_operator">:</span> <span class="TOKEN_operator">-</span><span class="TOKEN_number">1</span><span class="TOKEN_punctuation">;</span>
    <span class="TOKEN_punctuation">});</span>

    <span class="TOKEN_keyword">await</span> <span class="TOKEN_keyword">this</span><span class="TOKEN_punctuation">.</span>env<span class="TOKEN_punctuation">.</span>TODOS<span class="TOKEN_punctuation">.</span><span class="TOKEN_function">put</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_keyword">this</span><span class="TOKEN_punctuation">.</span>userID<span class="TOKEN_punctuation">,</span> JSON<span class="TOKEN_punctuation">.</span><span class="TOKEN_function">stringify</span><span class="TOKEN_punctuation">(</span>sorted<span class="TOKEN_punctuation">)</span><span class="TOKEN_punctuation">)</span>
    <span class="TOKEN_keyword">return</span> sorted
  <span class="TOKEN_punctuation">}</span>

  <span class="TOKEN_keyword">async</span> <span class="TOKEN_function">add</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_parameter">todoText</span><span class="TOKEN_operator">:</span> <span class="TOKEN_type">string</span><span class="TOKEN_punctuation">)</span><span class="TOKEN_operator">:</span> <span class="TOKEN_type">Promise</span><span class="TOKEN_punctuation">&lt;</span><span class="TOKEN_type">Todo</span><span class="TOKEN_punctuation">[]</span><span class="TOKEN_punctuation">&gt;</span> <span class="TOKEN_punctuation">{</span>
    <span class="TOKEN_keyword">const</span> todos <span class="TOKEN_operator">=</span> <span class="TOKEN_keyword">await</span> <span class="TOKEN_keyword">this</span><span class="TOKEN_punctuation">.</span><span class="TOKEN_function">get</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_punctuation">)</span>
    <span class="TOKEN_keyword">const</span> newTodo<span class="TOKEN_operator">:</span> <span class="TOKEN_type">Todo</span> <span class="TOKEN_operator">=</span> <span class="TOKEN_punctuation">{</span>
      id<span class="TOKEN_punctuation">:</span> <span class="TOKEN_type">Date</span><span class="TOKEN_punctuation">.</span><span class="TOKEN_function">now</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_punctuation">)</span><span class="TOKEN_punctuation">.</span><span class="TOKEN_function">toString</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_punctuation">)</span><span class="TOKEN_punctuation">,</span>
      text<span class="TOKEN_punctuation">:</span> <span class="TOKEN_parameter">todoText</span><span class="TOKEN_punctuation">,</span>
      completed<span class="TOKEN_punctuation">:</span> <span class="TOKEN_keyword">false</span>
    <span class="TOKEN_punctuation">};</span>
    todos<span class="TOKEN_punctuation">.</span><span class="TOKEN_function">push</span><span class="TOKEN_punctuation">(</span>newTodo<span class="TOKEN_punctuation">)</span>
    <span class="TOKEN_keyword">return</span> <span class="TOKEN_keyword">this</span><span class="TOKEN_punctuation">.</span><span class="TOKEN_function">set</span><span class="TOKEN_punctuation">(</span>todos<span class="TOKEN_punctuation">)</span>
  <span class="TOKEN_punctuation">}</span>
<span class="TOKEN_punctuation">}</span>
`;

export const goCodePreview = /* html */ `\
<span class="TOKEN_keyword">package</span> <span class="TOKEN_type">mux_test</span>

<span class="TOKEN_keyword">import</span> <span class="TOKEN_punctuation">(</span>
  <span class="TOKEN_string">"</span><span class="TOKEN_type">fmt</span><span class="TOKEN_string">"</span>
  <span class="TOKEN_string">"</span><span class="TOKEN_type">github.com/gorilla/mux</span><span class="TOKEN_string">"</span>
<span class="TOKEN_punctuation">)</span>

<span class="TOKEN_comment">// This example demonstrates building a dynamic URL using</span>
<span class="TOKEN_comment">// required vars and values retrieve from another source</span>
<span class="TOKEN_keyword">func</span> <span class="TOKEN_function">ExampleRoute_GetVarNames</span><span class="TOKEN_punctuation">()</span> <span class="TOKEN_punctuation">{</span>
  r <span class="TOKEN_operator">:=</span> mux<span class="TOKEN_punctuation">.</span><span class="TOKEN_function">NewRouter</span><span class="TOKEN_punctuation">()</span>

  route <span class="TOKEN_operator">:=</span> r<span class="TOKEN_punctuation">.</span><span class="TOKEN_function">Host</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_string">"{domain}"</span><span class="TOKEN_punctuation">)</span><span class="TOKEN_punctuation">.</span>
    <span class="TOKEN_function">Path</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_string">"/{group}/{item_id}"</span><span class="TOKEN_punctuation">)</span><span class="TOKEN_punctuation">.</span>
    <span class="TOKEN_function">Queries</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_string">"some_data1"</span><span class="TOKEN_punctuation">,</span> <span class="TOKEN_string">"{some_data1}"</span><span class="TOKEN_punctuation">)</span><span class="TOKEN_punctuation">.</span>
    <span class="TOKEN_function">Queries</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_string">"some_data2_and_3"</span><span class="TOKEN_punctuation">,</span> <span class="TOKEN_string">"{some_data2}.{some_data3}"</span><span class="TOKEN_punctuation">)</span>

  dataSource <span class="TOKEN_operator">:=</span> <span class="TOKEN_keyword">func</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_parameter">key</span> <span class="TOKEN_keyword">string</span><span class="TOKEN_punctuation">)</span> <span class="TOKEN_keyword">string</span> <span class="TOKEN_punctuation">{</span>
    <span class="TOKEN_keyword">return</span> <span class="TOKEN_string">"my_value_for_"</span> <span class="TOKEN_operator">+</span> <span class="TOKEN_parameter">key</span>
  <span class="TOKEN_punctuation">}</span>

  varNames<span class="TOKEN_punctuation">,</span> _ <span class="TOKEN_operator">:=</span> route<span class="TOKEN_punctuation">.</span><span class="TOKEN_function">GetVarNames</span><span class="TOKEN_punctuation">()</span>

  pairs <span class="TOKEN_operator">:=</span> <span class="TOKEN_special">make</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_punctuation">[]</span><span class="TOKEN_keyword">string</span><span class="TOKEN_punctuation">,</span> <span class="TOKEN_number">0</span><span class="TOKEN_punctuation">,</span> <span class="TOKEN_special">len</span><span class="TOKEN_punctuation">(</span>varNames<span class="TOKEN_punctuation">)</span><span class="TOKEN_operator">*</span><span class="TOKEN_number">2</span><span class="TOKEN_punctuation">)</span>

  <span class="TOKEN_keyword">for</span> _<span class="TOKEN_punctuation">,</span> varName <span class="TOKEN_operator">:=</span> <span class="TOKEN_keyword">range</span> varNames <span class="TOKEN_punctuation">{</span>
    pairs <span class="TOKEN_operator">=</span> <span class="TOKEN_special">append</span><span class="TOKEN_punctuation">(</span>pairs<span class="TOKEN_punctuation">,</span> varName<span class="TOKEN_punctuation">,</span> <span class="TOKEN_function">dataSource</span><span class="TOKEN_punctuation">(</span>varName<span class="TOKEN_punctuation">))</span>
  <span class="TOKEN_punctuation">}</span>

  url<span class="TOKEN_punctuation">,</span> err <span class="TOKEN_operator">:=</span> route<span class="TOKEN_punctuation">.</span><span class="TOKEN_function">URL</span><span class="TOKEN_punctuation">(</span>pairs<span class="TOKEN_operator">...</span><span class="TOKEN_punctuation">)</span>
  <span class="TOKEN_keyword">if</span> err <span class="TOKEN_operator">!=</span> <span class="TOKEN_keyword">nil</span> <span class="TOKEN_punctuation">{</span>
    <span class="TOKEN_special">panic</span><span class="TOKEN_punctuation">(</span>err<span class="TOKEN_punctuation">)</span>
  <span class="TOKEN_punctuation">}</span>
  fmt<span class="TOKEN_punctuation">.</span><span class="TOKEN_function">Println</span><span class="TOKEN_punctuation">(</span>url<span class="TOKEN_punctuation">.</span><span class="TOKEN_function">String</span><span class="TOKEN_punctuation">())</span>
<span class="TOKEN_punctuation">}</span>
`;

export const rustCodePreview = /* html */ `\
<span class="TOKEN_keyword">pub use</span> <span class="TOKEN_type">text</span><span class="TOKEN_operator">::</span><span class="TOKEN_punctuation">{</span><span class="TOKEN_type">GlyphCache</span><span class="TOKEN_punctuation">,</span> <span class="TOKEN_type">LoaderApi</span><span class="TOKEN_punctuation">};</span>

<span class="TOKEN_keyword">use</span> <span class="TOKEN_type">shader</span><span class="TOKEN_operator">::</span><span class="TOKEN_type">ShaderVersion</span><span class="TOKEN_punctuation">;</span>
<span class="TOKEN_keyword">use</span> <span class="TOKEN_type">text</span><span class="TOKEN_operator">::</span><span class="TOKEN_punctuation">{</span><span class="TOKEN_type">Gles2Renderer</span><span class="TOKEN_punctuation">,</span> <span class="TOKEN_type">Glsl3Renderer</span><span class="TOKEN_punctuation">,</span> <span class="TOKEN_type">TextRenderer</span><span class="TOKEN_punctuation">};</span>

<span class="TOKEN_comment">/// Whether the OpenGL functions have been loaded.</span>
<span class="TOKEN_keyword">pub static</span> GL_FUNS_LOADED<span class="TOKEN_operator">:</span> <span class="TOKEN_type">AtomicBool</span> <span class="TOKEN_operator">=</span> <span class="TOKEN_type">AtomicBool</span><span class="TOKEN_operator">::</span><span class="TOKEN_function">new</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_keyword">false</span><span class="TOKEN_punctuation">);</span>

<span class="TOKEN_punctuation">#[</span><span class="TOKEN_special">derive</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_type">Debug</span><span class="TOKEN_punctuation">)]</span>
<span class="TOKEN_keyword">pub enum</span> <span class="TOKEN_type">Error</span> <span class="TOKEN_punctuation">{</span>
    <span class="TOKEN_comment">/// Shader error.</span>
    <span class="TOKEN_operator">Shader</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_type">ShaderError</span><span class="TOKEN_punctuation">),</span>

    <span class="TOKEN_comment">/// Other error.</span>
    <span class="TOKEN_operator">Other</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_type">String</span><span class="TOKEN_punctuation">),</span>
<span class="TOKEN_punctuation">}</span>

<span class="TOKEN_keyword">impl</span> <span class="TOKEN_type">std</span><span class="TOKEN_operator">::</span><span class="TOKEN_type">error</span><span class="TOKEN_operator">::</span><span class="TOKEN_type">Error</span> <span class="TOKEN_keyword">for</span> <span class="TOKEN_type">Error</span> <span class="TOKEN_punctuation">{</span>
    <span class="TOKEN_keyword">fn</span> <span class="TOKEN_function">source</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_operator">&</span><span class="TOKEN_keyword">self</span><span class="TOKEN_punctuation">)</span> <span class="TOKEN_operator">-></span> <span class="TOKEN_type">Option</span><span class="TOKEN_punctuation">&lt;</span><span class="TOKEN_operator">&</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_keyword">dyn</span> <span class="TOKEN_type">std</span><span class="TOKEN_operator">::</span><span class="TOKEN_type">error</span><span class="TOKEN_operator">::</span><span class="TOKEN_type">Error</span> <span class="TOKEN_operator">+</span> <span class="TOKEN_keyword">'static</span><span class="TOKEN_punctuation">)&gt;</span> <span class="TOKEN_punctuation">{</span>
        <span class="TOKEN_keyword">match self</span> <span class="TOKEN_punctuation">{</span>
            <span class="TOKEN_type">Error</span><span class="TOKEN_operator">::Shader</span><span class="TOKEN_punctuation">(</span>err<span class="TOKEN_punctuation">)</span> <span class="TOKEN_operator">=&gt;</span> err<span class="TOKEN_operator">.</span><span class="TOKEN_function">source</span><span class="TOKEN_punctuation">(),</span>
            <span class="TOKEN_type">Error</span><span class="TOKEN_operator">::Other</span><span class="TOKEN_punctuation">(</span>_<span class="TOKEN_punctuation">)</span> <span class="TOKEN_operator">=&gt;</span> <span class="TOKEN_operator">None</span><span class="TOKEN_punctuation">,</span>
        <span class="TOKEN_punctuation">}</span>
    <span class="TOKEN_punctuation">}</span>
<span class="TOKEN_punctuation">}</span>

<span class="TOKEN_keyword">impl</span> <span class="TOKEN_type">fmt</span><span class="TOKEN_operator">::</span><span class="TOKEN_type">Display</span> <span class="TOKEN_keyword">for</span> <span class="TOKEN_type">Error</span> <span class="TOKEN_punctuation">{</span>
    <span class="TOKEN_keyword">fn</span> <span class="TOKEN_function">fmt</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_operator">&</span><span class="TOKEN_keyword">self</span><span class="TOKEN_punctuation">,</span> <span class="TOKEN_parameter">f</span><span class="TOKEN_operator">: &</span><span class="TOKEN_keyword">mut</span> <span class="TOKEN_type">fmt</span><span class="TOKEN_operator">::</span><span class="TOKEN_type">Formatter</span><span class="TOKEN_punctuation">&lt;</span><span class="TOKEN_keyword">'_</span><span class="TOKEN_punctuation">&gt;)</span> <span class="TOKEN_operator">-&gt;</span> <span class="TOKEN_type">fmt</span><span class="TOKEN_operator">::</span><span class="TOKEN_type">Result</span> <span class="TOKEN_punctuation">{</span>
        <span class="TOKEN_keyword">match self</span> <span class="TOKEN_punctuation">{</span>
            <span class="TOKEN_type">Error</span><span class="TOKEN_operator">::Shader</span><span class="TOKEN_punctuation">(</span>err<span class="TOKEN_punctuation">)</span> <span class="TOKEN_operator">=&gt;</span> <span class="TOKEN_punctuation">{</span>
                <span class="TOKEN_special">write!</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_parameter">f</span><span class="TOKEN_punctuation">,</span> <span class="TOKEN_string">"There was an error initializing the shaders:</span> <span class="TOKEN_operator">{</span>err<span class="TOKEN_operator">}</span><span class="TOKEN_string">"</span><span class="TOKEN_punctuation">)</span>
            <span class="TOKEN_punctuation">},</span>
            <span class="TOKEN_type">Error</span><span class="TOKEN_operator">::Other</span><span class="TOKEN_punctuation">(</span>err<span class="TOKEN_punctuation">)</span> <span class="TOKEN_operator">=&gt;</span> <span class="TOKEN_punctuation">{</span>
                <span class="TOKEN_special">write!</span><span class="TOKEN_punctuation">(</span><span class="TOKEN_parameter">f</span><span class="TOKEN_punctuation">,</span> <span class="TOKEN_string">"</span><span class="TOKEN_operator">{</span>err<span class="TOKEN_operator">}</span><span class="TOKEN_string">"</span><span class="TOKEN_punctuation">)</span>
            <span class="TOKEN_punctuation">},</span>
        <span class="TOKEN_punctuation">}</span>
    <span class="TOKEN_punctuation">}</span>
<span class="TOKEN_punctuation">}</span>
`;

export const htmlCodePreview = /* html */ `\
<span class="TOKEN_punctuation">&lt;!</span><span class="TOKEN_function">DOCTYPE</span> <span class="TOKEN_operator">html</span><span class="TOKEN_punctuation">&gt;</span>
<span class="TOKEN_punctuation">&lt;</span><span class="TOKEN_function">html</span><span class="TOKEN_punctuation">&gt;</span>
  <span class="TOKEN_punctuation">&lt;</span><span class="TOKEN_function">head</span><span class="TOKEN_punctuation">&gt;</span>
    <span class="TOKEN_punctuation">&lt;</span><span class="TOKEN_function">style</span><span class="TOKEN_punctuation">&gt;</span>

      <span class="TOKEN_function">body</span> <span class="TOKEN_punctuation">{</span>
        <span class="TOKEN_type">font-family</span><span class="TOKEN_punctuation">:</span> <span class="TOKEN_keyword">Arial</span><span class="TOKEN_punctuation">;</span>
        <span class="TOKEN_type">margin</span><span class="TOKEN_punctuation">:</span> <span class="TOKEN_number">40</span><span class="TOKEN_keyword">px</span><span class="TOKEN_punctuation">;</span>
      <span class="TOKEN_punctuation">}</span>

      <span class="TOKEN_operator">.box</span> <span class="TOKEN_punctuation">{</span>
        <span class="TOKEN_type">padding</span><span class="TOKEN_punctuation">:</span> <span class="TOKEN_number">20</span><span class="TOKEN_keyword">px</span><span class="TOKEN_punctuation">;</span>
        <span class="TOKEN_type">background</span><span class="TOKEN_punctuation">:</span> <span class="TOKEN_keyword">#eee</span><span class="TOKEN_punctuation">;</span>
        <span class="TOKEN_type">border-radius</span><span class="TOKEN_punctuation">:</span> <span class="TOKEN_number">6</span><span class="TOKEN_keyword">px</span><span class="TOKEN_punctuation">;</span>
      <span class="TOKEN_punctuation">}</span>

      <span class="TOKEN_function">h1</span> <span class="TOKEN_punctuation">{</span>
        <span class="TOKEN_type">color</span><span class="TOKEN_punctuation">:</span> <span class="TOKEN_keyword">#333</span><span class="TOKEN_punctuation">;</span>
      <span class="TOKEN_punctuation">}</span>

    <span class="TOKEN_punctuation">&lt;/</span><span class="TOKEN_function">style</span><span class="TOKEN_punctuation">&gt;</span>
  <span class="TOKEN_punctuation">&lt;/</span><span class="TOKEN_function">head</span><span class="TOKEN_punctuation">&gt;</span>
  <span class="TOKEN_punctuation">&lt;</span><span class="TOKEN_function">body</span><span class="TOKEN_punctuation">&gt;</span>
    <span class="TOKEN_punctuation">&lt;</span><span class="TOKEN_function">div</span> <span class="TOKEN_operator">class</span><span class="TOKEN_punctuation">=</span><span class="TOKEN_string">"box"</span><span class="TOKEN_punctuation">&gt;</span>
      <span class="TOKEN_punctuation">&lt;</span><span class="TOKEN_function">h1</span><span class="TOKEN_punctuation">&gt;</span>Hello<span class="TOKEN_punctuation">&lt;/</span><span class="TOKEN_function">h1</span><span class="TOKEN_punctuation">&gt;</span>
      <span class="TOKEN_punctuation">&lt;</span><span class="TOKEN_function">p</span><span class="TOKEN_punctuation">&gt;</span>This is a basic HTML + CSS example.<span class="TOKEN_punctuation">&lt;/</span><span class="TOKEN_function">p</span><span class="TOKEN_punctuation">&gt;</span>
    <span class="TOKEN_punctuation">&lt;/</span><span class="TOKEN_function">div</span><span class="TOKEN_punctuation">&gt;</span>
  <span class="TOKEN_punctuation">&lt;/</span><span class="TOKEN_function">body</span><span class="TOKEN_punctuation">&gt;</span>
<span class="TOKEN_punctuation">&lt;/</span><span class="TOKEN_function">html</span><span class="TOKEN_punctuation">&gt;</span>
`;
