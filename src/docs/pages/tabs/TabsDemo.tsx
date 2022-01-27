import {DocPage} from '../../components/doc-page/DocPage';
import {DocsContent} from '../../docs-content';
import './TabsDemo.scss';
import {MLTabs} from '../../../components/tabs/MLTabs';
import { MLPanelGroup } from '../../../components/panels/MLPanelGroup';
import { MLPanel } from '../../../components/panels/MLPanel';
import { useState } from 'react';


export function TabsDemo(props: Record<string, any>) {
  // eslint-disable-next-line no-unused-vars
  const [tab, setTab] = useState(0);
  const demoTabs = [
    {key: 'Tab One', value: 'tab-one'},
    {key: 'Tab Two', value: 'tab-two'},
    {key: 'Tab Three', value: 'tab-three'},
    {key: 'Tab Four', value: 'tab-four'}
  ];

  const demoTabs2 = ['Monday', 'Wednesday', 'Friday', 'OMG Saturday'];

  const panelGroups: Record<string, number> = {
    tabsDemo1PanelGroup: 0
  };

  function changePanel(index: number, groupId: string) {
    console.log(index);
    // panelGroups[groupId] = index;
    setTab(index);
    console.log('p tab', index);
  }

  return (
    <DocPage pageContent={DocsContent['tabs']}>
      <div className="tabs-demo">
        <MLTabs tabs={demoTabs} nameKey={'key'} onTabChange={changePanel}
          panelGroup={'tabsDemo1PanelGroup'}
          selectedIndex={tab}
          valueKey={'value'} id={'tabs-demo-1'}>
          <h2>Hi</h2>
        </MLTabs>
        <MLPanelGroup id={'tabsDemo1PanelGroup'}
          index={panelGroups.tabsDemo1PanelGroup}>
          <MLPanel>
            <h3>Panel 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Scelerisque eleifend donec pretium vulputate. Urna porttitor
              rhoncus dolor purus non enim praesent elementum. Rhoncus aenean
              vel elit scelerisque mauris pellentesque pulvinar. In ante metus
              dictum at tempor commodo. Elit pellentesque habitant morbi
              tristique. Amet nulla facilisi morbi tempus iaculis urna id
              volutpat. Donec enim diam vulputate ut pharetra. Maecenas pharetra
              convallis posuere morbi leo. Et magnis dis parturient montes
              nascetur ridiculus mus. Id leo in vitae turpis massa sed
              elementum. Quis auctor elit sed vulputate mi. Ut faucibus pulvinar
              elementum integer enim.</p>
            <p>Placerat duis ultricies lacus sed. Vitae aliquet nec ullamcorper
              sit amet risus nullam eget. Malesuada fames ac turpis egestas.
              Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. At
              varius vel pharetra vel turpis nunc eget. Phasellus egestas tellus
              rutrum tellus pellentesque eu tincidunt tortor aliquam. Nunc eget
              lorem dolor sed viverra. Nunc sed augue lacus viverra vitae
              congue. At erat pellentesque adipiscing commodo elit at. Bibendum
              ut tristique et egestas quis ipsum suspendisse. Sed libero enim
              sed faucibus turpis. Ultricies mi eget mauris pharetra et
              ultrices. Elit sed vulputate mi sit amet mauris commodo quis. Sit
              amet consectetur adipiscing elit. Nibh cras pulvinar mattis nunc
              sed blandit libero. Mauris vitae ultricies leo integer malesuada.
              Iaculis at erat pellentesque adipiscing commodo elit at.</p>
          </MLPanel>
          <MLPanel>
            <h3>Panel 2</h3>
            <p>Placerat orci nulla pellentesque dignissim enim sit amet. Dui
              sapien eget mi proin sed libero enim sed faucibus. Id diam
              maecenas ultricies mi eget mauris pharetra et. Eros in cursus
              turpis massa. Nunc scelerisque viverra mauris in. Ultrices neque
              ornare aenean euismod. Morbi tincidunt ornare massa eget egestas
              purus viverra accumsan. Sed viverra tellus in hac habitasse platea
              dictumst vestibulum. Volutpat consequat mauris nunc congue nisi
              vitae suscipit. Etiam sit amet nisl purus in mollis nunc sed id.
              Neque aliquam vestibulum morbi blandit cursus. Donec pretium
              vulputate sapien nec sagittis aliquam malesuada bibendum. Est
              ullamcorper eget nulla facilisi etiam dignissim. Molestie nunc non
              blandit massa. Ultricies mi eget mauris pharetra et ultrices neque
              ornare. Diam volutpat commodo sed egestas egestas. Tortor posuere
              ac ut consequat semper viverra nam libero. Nisl tincidunt eget
              nullam non nisi est sit amet facilisis. Donec et odio pellentesque
              diam volutpat commodo sed.</p>
          </MLPanel>
          <MLPanel>
            <h3>Panel 3</h3>
            <p>Consequat ac felis donec et odio pellentesque. Suspendisse
              ultrices gravida dictum fusce ut placerat orci nulla pellentesque.
              Venenatis a condimentum vitae sapien pellentesque habitant morbi
              tristique senectus. In nulla posuere sollicitudin aliquam ultrices
              sagittis orci. In tellus integer feugiat scelerisque varius morbi
              enim nunc. Imperdiet massa tincidunt nunc pulvinar sapien et
              ligula. Odio aenean sed adipiscing diam. Enim sed faucibus turpis
              in eu mi. Tempus quam pellentesque nec nam. Mi ipsum faucibus
              vitae aliquet nec ullamcorper. Interdum velit laoreet id donec
              ultrices tincidunt arcu non. Sit amet nisl purus in mollis. Urna
              nunc id cursus metus aliquam. Sem fringilla ut morbi tincidunt
              augue interdum velit euismod in. Diam maecenas sed enim ut sem
              viverra aliquet eget. Sed vulputate odio ut enim blandit volutpat
              maecenas. Et netus et malesuada fames ac. Adipiscing tristique
              risus nec feugiat in fermentum. Sed nisi lacus sed viverra tellus
              in hac habitasse.</p>
          </MLPanel>
          <MLPanel>
            <h3>Panel 4</h3>
            <p>Faucibus ornare suspendisse sed nisi lacus. Id faucibus nisl
              tincidunt eget. Faucibus a pellentesque sit amet porttitor eget
              dolor. In arcu cursus euismod quis. Commodo viverra maecenas
              accumsan lacus vel facilisis volutpat est. Pharetra sit amet
              aliquam id. Et leo duis ut diam quam. Sed egestas egestas
              fringilla phasellus faucibus scelerisque. Placerat duis ultricies
              lacus sed turpis tincidunt id. Ac orci phasellus egestas
              tellus.</p>
          </MLPanel>
        </MLPanelGroup>
        <br/>
        <MLTabs tabs={demoTabs2} id={'tabs-demo-2'}>
          <h2>Hi</h2>
        </MLTabs>
      </div>
    </DocPage>
  );
}
