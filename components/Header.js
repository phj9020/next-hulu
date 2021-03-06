import Image from 'next/image';
import HeaderItem from './HeaderItem';
import { HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'
import Link from 'next/link';

function Header() {
    return (
        <header className="flex flex-col sm:flex-row justify-between items-center m-5 h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <Link href="/">
                    <a>
                        <HeaderItem title="HOME" Icon={HomeIcon}/>
                    </a>
                </Link>
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon}/>
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon}/>
                <HeaderItem title="SEARCH" Icon={SearchIcon}/>
                <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
            </div>
            <Image 
                className="object-contain"
                src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt="logo" width={200} height={100}/>
        </header>
    )
}

export default Header;
