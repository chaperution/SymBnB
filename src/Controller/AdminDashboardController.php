<?php

namespace App\Controller;

use App\Service\Stats;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class AdminDashboardController extends Controller
{
    /**
     * @Route("/admin", name="admin_dashboard")
     */
    public function index(ObjectManager $manager, Stats $stats)
    {

        $statsTotal = $stats->getStats();
        $bestAds = $stats->getAdsStats('DESC');
        $worstAds = $stats->getAdsStats('ASC');

        return $this->render('admin/dashboard/index.html.twig', [
            'stats' => $statsTotal,
            'bestAds' => $bestAds,
            'worstAds' => $worstAds
        ]);
    }
}
